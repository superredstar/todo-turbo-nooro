"use client"

import { IcLeftArrow } from "@repo/icon/ic-left-arrow";
import { useRouter } from "next/navigation";

export default function TaskLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  return (
    <main className="w-full mt-20">
      <div className="w-184 mx-auto">
        <div>
          <button onClick={router.back}>
            <IcLeftArrow />
          </button>
        </div>
        {children}
      </div>
    </main>
  )
}