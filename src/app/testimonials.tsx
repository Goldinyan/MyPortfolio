"use client";
import { useRouter } from "next/navigation";

export const testimonials = [
  {
    name: "John Doe",
    feedback:
      "Goldinyan did an amazing job on our website redesign. Highly recommend!",
    role: "CEO, Company A",
    star: 5,
  },
  {
    name: "Jane Smith",
    feedback:
      "Professional and efficient. Delivered the project ahead of schedule.",
    role: "CTO, Company B",
    star: 4,
  },
  {
    name: "Mike Johnson",
    feedback:
      "Great communication and attention to detail. Will work with Goldinyan again.",
    role: "Freelancer",
    star: 5,
  },
];

export default function Testimonials() {
  const router = useRouter();

  return (
    <div className="relative w-full h-100 overflow-hidden border-2 rounded-2xl bg-card-bg border-border-bg">
      <div className="flex flex-col px-5 pt-5">
        <p className="text-white text-3xl">Testimonials</p>
        <p className="text-custom-gray-2 text-1 pt-1">
          What my clients say about my work
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col p-5 m-4 bg-bg-black rounded-2xl border border-border-bg hover:scale-105 transition-transform"
          >
            <div className="mt-auto flex flex-row justify-between items-center">
              <div className="flex-col">
                <p className="text-white font-bold">{testimonial.name}</p>
                <p className="text-text-primary text-sm">{testimonial.role}</p>
              </div>

              <div className="flex">
                {Array.from({ length: testimonial.star }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-text-secondary"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.785.57-1.84-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                  </svg>
                ))}
                {Array.from({ length: 5 - testimonial.star }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-white"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.785.57-1.84-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                  </svg>
                ))}
              </div>
            </div>

            <p className="text-text-secondary text-sm italic mb-4 pt-2">
             {`"${testimonial.feedback}"`} 
            </p>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-50 bg-gradient-to-t from-card-bg to-transparent pointer-events-none" />

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 
                bg-text-secondary rounded-lg border border-border-bg 
                transition-transform font-medium text-black text-center 
                px-4 whitespace-nowrap py-2 mb-4 hover:scale-110 cursor-pointer"
      >
        <p onClick={() => router.push("/testimonials")}>
          View All Testimonials
        </p>
      </div>
    </div>
  );
}
