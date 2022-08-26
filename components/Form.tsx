import { BsLinkedin } from "react-icons/bs";
import { DiGithubFull } from "react-icons/di";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export const Form = () => {
  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_do6fj2b",
        "template_2bdx73r",
        //@ts-ignore
        form.current,
        "w7Kcsxv18MJb-eKKk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
      <section className="w-full">
        <h2 id="hire" className="secondary-title">
          Hire me
        </h2>
        <p className="section-paragraph">
          Feel free to to contact me any time, through any method below.
        </p>

        <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-24">
          {/*          FORM BEGINS              */}
          {/* 
            //@ts-ignore  */}
          <form ref={form} onSubmit={sendEmail} className="space-y-12">
            <div>
              <label className="text-white block mb-6 text-xl font-bold">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                className="w-full border border-input-border bg-input px-4 py-4"
              />
            </div>
            <div>
              <label className="text-white block mb-6 text-xl font-bold">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                className="w-full border border-input-border bg-input px-4 py-4"
              />
            </div>
            <div>
              <label className="text-white block mb-6 text-xl font-bold">
                Message
              </label>
              <textarea
                name="message"
                //@ts-ignore
                type="email"
                className="w-full border border-input-border bg-input px-4 py-4 h-56 resize-none"
              ></textarea>
            </div>
            <input
              type="submit"
              value="Send"
              className="cursor-pointer px-6 py-2 bg-theme hover:bg-sky-900 text-white font-bold"
            />
            {/* Send it!
            </input> */}
          </form>
          {/*          FORM ENDS.              */}

          <div className="mt-12">
            <a href="tel:+8801710129029">+880 1710129029</a>
            <a
              href="mailto:ayemanbsalauddin@gmail.com"
              className="text-secondary underline mt-3 block"
            >
              ayemanbsalauddin@gmail.com
            </a>

            <div className="flex mt-20 space-x-6">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/ayeman-bin-salauddin/"
              >
                <BsLinkedin size={70} />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Ayeman-B-Salauddin"
              >
                <DiGithubFull size={70} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
