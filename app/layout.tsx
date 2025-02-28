"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";


// export const metadata = {
//   title: "Next.js",
//   description: "Generated by Next.js",
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const onClickUrl = (url: string) => {
    router.push(url);
  };
  return (
    <html lang="en">
      <body>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
            <li onClick={() => onClickUrl("/settings")}>Settings</li>
        </ul>
        {children}
        <div>Footer</div>
      </body>
    </html>
  );
}
