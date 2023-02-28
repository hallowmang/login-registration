import { useState } from "react";
import Head from "next/head";
import Layout from "@/layout/layout";
import Link from "next/link";
import Image from 'next/image'
import styles from "@/styles/Form.module.css";
import { HiAtSymbol, HiLockClosed } from "react-icons/hi";

export default function Login() {

  const [show, setShow] = useState(false);

  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>

      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
          <p className="w-3/4 mx-auto text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            officia?
          </p>
        </div>
        {/* form */}
        <form className="flex flex-col gap-5">
          <div className={styles.input_group}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.input_text}
            />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={25}/>
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              type={`${show ? "text" : "password"}`}
              name="password"
              placeholder="Password"
              className={styles.input_text}
            />
            <span className="icon flex items-center px-4"
              onClick={() => setShow(!show)}
            >
              <HiLockClosed size={25}/>
            </span>
          </div>

          {/* login buttons */}
          <div className="input-button">
            <button type="submit" className={styles.button}>
              Login
            </button>
          </div>
          <div className="input-button">
            <button type="button" className={styles.button_custom}>
              <Image src={"/assets/google.svg"} width="20" height={20}></Image>
              Sign In with Google{" "}
            </button>
          </div>
          <div className="input-button">
            <button type="button" className={styles.button_custom}>
              <Image src={"/assets/github.svg"} width={25} height={25}></Image>
              Sign In with Github{" "}
            </button>
          </div>
        </form>
        {/* bottom */}
        <div className="text-center text-gray-400 ">
          don't have an account yet?{" "}
          <Link href={"/register"}>
            <div className="text-blue-700">Sign Up</div>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
