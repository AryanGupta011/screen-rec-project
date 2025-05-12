"use client";

import Link from "next/link";
import Image from "next/image";

import { authClient } from "@/lib/auth-client";

const SignIn = () => {
  return (
    <main className="sign-in">
      <aside className="testimonial">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="ScreenSnap Logo"
            width={32}
            height={32}
          />
          <h1>ScreenSnap</h1>
        </Link>

        <div className="description">
          <section>
            <figure>
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  src="/assets/icons/star.svg"
                  alt="Star Icon"
                  width={20}
                  height={20}
                  key={index}
                />
              ))}
            </figure>
            <p>
            ScreenSnap transforms your ideas into visual stories. Record, edit, and share with just a few clicks—making every tutorial, presentation, and feedback session effortlessly engaging.
            </p>
            <article>
              <Image
                src="/assets/images/photo-modified.png"
                alt="Aryan"
                width={64}
                height={64}
                className="rounded-full"
              />
              <div>
                <h2>Aryan Gupta</h2>
                <p>Web Developer</p>
              </div>
            </article>
          </section>
        </div>
        <p>© ScreenSnap 2025</p>
      </aside>
      <aside className="google-sign-in">
        <section>
          <Link href="/">
            <Image
              src="/assets/icons/logo.svg"
              alt="SnapChat Logo"
              width={40}
              height={40}
            />
            <h1>ScreenSnap</h1>
          </Link>
          <p>
            Create and share your very first <span>ScreenSnap video</span> in no
            time!
          </p>

          <button
            onClick={async () => {
              return await authClient.signIn.social({
                provider: "google",
              });
            }}
          >
            <Image
              src="/assets/icons/google.svg"
              alt="Google Icon"
              width={22}
              height={22}
            />
            <span>Sign in with Google</span>
          </button>
        </section>
      </aside>
      <div className="overlay" />
    </main>
  );
};

export default SignIn;