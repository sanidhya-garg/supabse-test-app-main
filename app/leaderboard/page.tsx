"use client";

import { useEffect, useState, useRef } from "react";
import { supabase } from "../../supabaseClient";
import { gsap } from "gsap";

const LeaderboardPage = () => {
  const [leaderboard, setLeaderboard] = useState<
    { user_id: string; user_name: string; points: number }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const { data, error } = await supabase
          .from("task_submissions")
          .select("user_id, user_name, points")
          .order("points", { ascending: false });

        if (error) throw error;

        // Sum points by user
        const pointsMap: { [key: string]: { user_name: string; points: number } } =
          {};
        data?.forEach((submission) => {
          if (submission.user_id) {
            pointsMap[submission.user_id] = {
              user_name: submission.user_name,
              points:
                (pointsMap[submission.user_id]?.points || 0) + submission.points,
            };
          }
        });

        // Create leaderboard array
        const leaderboardArray = Object.entries(pointsMap).map(
          ([user_id, { user_name, points }]) => ({ user_id, user_name, points })
        );

        setLeaderboard(leaderboardArray);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  // Spinner component
  const Spinner = () => (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-white"></div>
    </div>
  );

  interface DisplayUsersRankingsProps {
    SerialNo: number;
    Name: string;
    Points: number;
  }

  const DisplayUsersRankings: React.FC<DisplayUsersRankingsProps> = ({
    SerialNo,
    Name,
    Points,
  }) => {
    const userEntryRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      gsap.fromTo(
        ".leaderboard-entry",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 0.6, ease: "power2.out" }
      );
    }, []);

    useEffect(() => {
      const handleMouseEnter = () => {
        gsap.to(userEntryRef.current, {
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(userEntryRef.current, {
          scale: 1,
          backgroundColor: "transparent",
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const userEntry = userEntryRef.current;
      if (userEntry) {
        userEntry.addEventListener("mouseenter", handleMouseEnter);
        userEntry.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          userEntry.removeEventListener("mouseenter", handleMouseEnter);
          userEntry.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    }, []);

    return (
      <div
        ref={userEntryRef}
        className="flex flex-col items-center justify-center gap-4 w-[100vw] leaderboard-entry rounded-lg p-4"
      >
        <div className="grid grid-cols-3 w-[80vw] text-center">
          <div className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium font-sans">
            {SerialNo}
          </div>
          <div className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium font-sans">
            {Name}
          </div>
          <div className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-sans">
            {Points}
          </div>
        </div>
        <div className="w-[60vw] h-[0.05rem] bg-white"></div>
      </div>
    );
  };

  return (
    <div className="w-[100vw] min-h-screen bg-black flex flex-col items-center justify-start">
      <div className="p-8">
        <h1 className="text-white text-center text-4xl md:text-6xl font-serif">
          LeaderBoard
        </h1>
        <div className="w-[80vw] h-[0.2px] bg-white mt-4"></div>
      </div>
      <div className="grid grid-cols-3 w-[80vw] text-center mt-12">
        <div className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium font-mono">
          S. No.
        </div>
        <div className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium font-mono">
          Name
        </div>
        <div className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold font-mono">
          Points
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-12 mt-8">
        {loading ? (
          <Spinner />
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          leaderboard.map((user, index) => (
            <DisplayUsersRankings
              key={user.user_id}
              SerialNo={index + 1}
              Name={user.user_name}
              Points={user.points}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default LeaderboardPage;
