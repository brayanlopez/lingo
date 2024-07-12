import Image from "next/image";
import Link from "next/link";
import { InfinityIcon } from "lucide-react";

import { Button } from "./ui/button";

type Props = {
  activeCourse: { imageSrc: string; title: string };
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

const UserProgress = ({
  activeCourse,
  hasActiveSubscription,
  hearts,
  points,
}: Props) => {
  return (
    <div
      className="flex items-center justify-between gap-x-2 w-full
  "
    >
      <Link href={"/courses"}>
        <Button variant={"ghost"}>
          <Image
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            className="rounded-md border"
            width={32}
            height={32}
          />
        </Button>
      </Link>
      <Link href={"/shop"}>
        <Button variant={"ghost"} className="text-orange-500">
          <Image src={"points.svg"} height={28} alt="points" width={28} />{" "}
          {points}
        </Button>
      </Link>
      <Link href={"/shop"}>
        <Button variant={"ghost"} className="text-rose-500">
          <Image src={"heart.svg"} height={22} alt="hearts" width={22} />
          {hasActiveSubscription ? (
            <InfinityIcon className="h-4 w-4 stroke-[3]" />
          ) : (
            hearts
          )}
        </Button>
      </Link>
    </div>
  );
};

export default UserProgress;
