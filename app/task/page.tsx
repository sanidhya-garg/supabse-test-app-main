/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"; // Ensure this is at the top for client components

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/supabaseClient'; // Ensure you have a supabase client initialized
import Navbar from '@/components/Navbar';


const tasks = [
  { name: 'Task 1', points: 10 },
  { name: 'Task 2', points: 20 },
  { name: 'Task 3', points: 30 },
  { name: 'Task 4', points: 40 },
  { name: 'Task 5', points: 50 },
];

const TaskPage = () => {
  const [submissionLink, setSubmissionLink] = useState('');
  const [taskName, setTaskName] = useState(tasks[0].name); // Default to Task 1
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error || !user) {
        // Redirect to the /auth page if not authenticated
        router.push('/sign-in');
      }
    };

    checkAuth();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError) {
      setError(userError.message);
      return;
    }

    if (!user) {
      setError('You must be logged in to submit a task.');
      return;
    }

    const selectedTask = tasks.find(task => task.name === taskName);
    if (!selectedTask) return;

    // Extract user name, defaulting to 'Unknown User' if not available
    const userName = user.user_metadata?.full_name || 'Unknown User';

    // Insert the task submission
    const { data, error: insertError } = await supabase
      .from('task_submissions')
      .insert([
        {
          user_id: user.id,
          user_name: userName, // Add user name to the insert
          task_name: selectedTask.name,
          submission_link: submissionLink,
          points: selectedTask.points,
        },
      ]);

    if (insertError) {
      setError(insertError.message);
    } else {
      setSubmissionLink('');
      setTaskName(tasks[0].name);
      alert('Submission successful!');
    }
  };

  return (
    <>
         <Navbar/>
      <div className="max-w-md mx-auto mt-10 p-5 border border-gray-300 rounded shadow">
        <h1 className="text-xl font-bold mb-4">Task Submissions</h1>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Select Task</label>
            <select
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              className="border p-2 w-full rounded"
            >
              {tasks.map(task => (
                <option key={task.name} value={task.name}>
                  {task.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Submission Link</label>
            <input
              type="url"
              value={submissionLink}
              onChange={(e) => setSubmissionLink(e.target.value)}
              required
              className="border p-2 w-full rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default TaskPage;