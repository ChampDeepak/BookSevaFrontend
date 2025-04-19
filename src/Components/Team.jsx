import homeTutor from "../../public/homeTutor.jpg";
import hospitalLab from "../../public/hospitalLab.jpg";
import mechanic from "../../public/mechanic.jpg";
import nurse from "../../public/nurse.jpg";
import physioTherapist from "../../public/physioTherapist.jpg";
import plumber from "../../public/plumber.jpg";
import FlippingCard from "./FlippingCard";

function Team() {
  return (
    <section className="py-24 bg-[var(--body_bg)] text-[var(--body_clr)]">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-16">
          <h1 className="sm:text-4xl text-3xl font-bold mb-4">Meet Our Team</h1>
          <p className="lg:w-2/3 mx-auto text-base leading-relaxed">
            Get to know the skilled pros behind your perfect home fixes! Our team of plumbers,
            electricians, carpenters, and more is ready to serve you with expertise and care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
          <FlippingCard imagePath={homeTutor} jobRole="Home Tutor" />
          <FlippingCard imagePath={nurse} jobRole="Nurse" />
          <FlippingCard imagePath={hospitalLab} jobRole="Hospital Lab" />
          <FlippingCard imagePath={physioTherapist} jobRole="Physio-Therapist" />
          <FlippingCard imagePath={plumber} jobRole="Plumber" />
          <FlippingCard imagePath={mechanic} jobRole="Mechanic" />
        </div>
      </div>
    </section>
  );
}

export default Team;
