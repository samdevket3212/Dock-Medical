"use client";
import Appointment from "@/common/Appointment";
import BetterSteps from "@/common/BetterSteps";

const PhysicalExam = () => {
  return (
    <div className="dc__PageExam bg-white pt-20 relative w-full block">
      <div className="max-w-dcContainer mx-auto px-4">
        <div className="dc__Title flex justify-center w-full mb-16">
          <h2 className="relative text-dcBlack100 text-dcH1 font-semibold">
            immunizations
            <div className="flex items-center gap-x-1.5 mt-5">
              <span className="w-3 h-3 bg-dcBlue50 rounded-full" />
              <span className="w-3 h-3 bg-dcYellow400 rounded-full" />
              <span className="w-3 h-3 bg-dcGreen50 rounded-full" />
            </div>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <div className="dc__ImgDiv block w-full z-10 relative">
            <img
              src="/assets/images/preEmployment.jpg"
              alt="Physical Exam Img"
              className="w-2/3 h-auto -z-1"
            />
            <div className="dc__ExamBox block w-2/3 bg-dcBlue50 ml-auto py-8 px-14 rounded-tl-3xl -mt-28 z-10  relative">
              <h4 className="text-dcBlack font-medium text-dcH1">6</h4>
              <h4 className="text-dcBlack font-medium text-dcBody3">
                types of immunizations available
              </h4>
            </div>
          </div>
          <div className="w-full dc__ContentDiv">
            <h5 className="text-black text-dcBody3 mb-4 font-medium">
              the future of your healthcare is based on
            </h5>
            <h3 className="text-dcBlack100 font-medium text-dcH2 mb-10">
              customized, continuous, and comprehensive care.
            </h3>
            <p className="text-black text-dcBody1">
              dock. is a highly accessible Primary Care Retail Practice, that
              provides a variety of immunizations to maintain your health and
              protect yourself from contagious diseases. Immunizations play a
              vital role in the healthcare of individuals and the collective
              population. These immunizations protect us from a number of
              preventable diseases, such as polio, tetanus, rotavirus, mumps and
              diphtheria. Some vaccinations are required prior to traveling to
              certain locations, and many schools and communities mandate
              immunizations before allowing attendance.
            </p>

            <div class="flex">
              <button className=" bg-dcGreen400 w-auto px-8 py-2 rounded-md text-dcBody2 flex items-center my-10 text-white">
                Book Now
              </button>
            </div>
          </div>
        </div>
        <div className="dc__Info w-full block mb-24">
          <div className="dc__Title flex items-center jsutify-center flex-col text-center">
            <div className="flex items-center gap-x-1.5 mb-5">
              <span className="w-3 h-3 bg-dcBlue50 rounded-full" />
              <span className="w-3 h-3 bg-dcYellow400 rounded-full" />
              <span className="w-3 h-3 bg-dcGreen50 rounded-full" />
            </div>
            <h4 className="text-dcBlack100 font-medium text-dcH2 mb-10">
              we have you covered.
            </h4>
            <p className="text-black font-light text-dcBody1 w-3/5">
              {`dock. is here to help you painlessly get the immunizations you need and we adhere to the guidelines issued by the Centers for Disease Control and Prevention (CDC) and other regulatory agencies.  We ensure we are stocking a variety of vaccines, so that they are readily available when you need them. `}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full immDocs mb-24 gap-16">
          <div className="dc__Content block w-full">
            <h3 className="text-dcBlack100 text-dcH2 font-medium mb-16">
              common immunizations
              <div className="flex items-center gap-x-1.5 mt-5">
                <span className="w-3 h-3 bg-dcBlue50 rounded-full" />
                <span className="w-3 h-3 bg-dcYellow400 rounded-full" />
                <span className="w-3 h-3 bg-dcGreen50 rounded-full" />
              </div>
            </h3>
            <div className="dc__BoxContent p-10 bg-dcBlue50">
              <ul className="w-full block list-inside list-disc">
                <li className="text-black text-dcBody1 font-light">
                  Td (tetanus and diphtheria) - ages 11+
                </li>
                <li className="text-black text-dcBody1 font-light">
                  Flu vaccine - ages 4+
                </li>
                <li className="text-black text-dcBody1 font-light">
                  Tdap (tetanus, diphtheria, acellular pertussis / whooping
                  cough vaccine)
                </li>
                <li className="text-black text-dcBody1 font-light">
                  MMR (measles, mumps, rubella)
                </li>
                <li className="text-black text-dcBody1 font-light">
                  Hepatitis B
                </li>
                <li className="text-black text-dcBody1 font-light">
                  Hepatitis A
                </li>
              </ul>
            </div>
          </div>
          <div className="doc__Img w-full">
            <img
              src="/assets/images/immunizationsImg.jpg"
              alt="Immunizations Img"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      <BetterSteps />
      <Appointment
        title="your doctor when you need it."
        description="Urgent or ongoing, we promise to deliver immediate and effective primary care throughout your entire healthcare journey."
      />
    </div>
  );
};

export default PhysicalExam;
