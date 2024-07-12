import FeedWrapper from "@/components/FeedWrapper";
import StickyWrapper from "@/components/StickyWrapper";
import Header from "./Header";
import UserProgress from "@/components/UserProgress";

const LearnPage = () => {
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
