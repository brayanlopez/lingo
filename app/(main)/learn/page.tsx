import { redirect } from "next/navigation";

import StickyWrapper from "@/components/StickyWrapper";
import FeedWrapper from "@/components/FeedWrapper";
import UserProgress from "@/components/UserProgress";
import Header from "./Header";

import { getUserProgress } from "@/db/queries";

const LearnPage = async () => {
  const userProgressData = getUserProgress();

  const [userProgress] = await Promise.all([userProgressData]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }
  return (
    // TODO: remove flex-row-reverse
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        {/* TODO: check logic for image soruce */}
        <UserProgress
          activeCourse={{ title: "Spanish", imageSrc: "" }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title="Spanish" />{" "}
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
