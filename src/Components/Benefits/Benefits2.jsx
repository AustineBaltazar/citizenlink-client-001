import React from "react";

export default function Benefits2() {
  return (
    <>
      {" "}
      <ul className="list-disc list-inside p-4">
        <h1 className="ml-5 font-bold flex justify-center underline mb-4">
          BENEFITS OF 4Ps
        </h1>
        <h1 className="ml-5 font-bold text-red-700">HEALTH ASSISTANCE</h1>
        <li>Health check-ups for pregnant women and children aged 0 to 5</li>
        <ul className="list-disc list-inside ">
          <li>Deworming of schoolchildren aged 6 to 14;</li>
          <li>
            Enrollment of children in daycare, elementary, and secondary schools
            and family development sessions
          </li>
        </ul>
        <h1 className="ml-5 font-bold text-red-700">HEALTH ASSISTANCE</h1>
        <ul className="list-disc list-inside ">
          <li className="font-bold">Health Grant</li>
          <li>
            P500 per household every month or a total of P6,000 every year.
          </li>
          <li className="font-bold">Education Grant</li>
          <li>
            P300 per child every month for ten months or a total of P3,000 every
            year (a household may register a maximum of three children for the
            program)
          </li>
        </ul>
        <h1 className="ml-5 font-bold text-red-700">HEALTH ASSISTANCE</h1>
        <ul className="list-disc list-inside ">
          <li>
            Pregnant women must avail pre- and post-natal care, and be attended
            during childbirth by a trained professional.
          </li>
          <li>
            Parents or guardians must attend the family development sessions,
            which include topics on responsible parenting, health, and
            nutrition;
          </li>
          <li>
            Children aged 0-5 must receive regular preventive health check-ups
            and vaccines.
          </li>
          <li>Children aged 6-14 must receive deworming pills twice a year.</li>
          <li>
            Children-beneficiaries aged 3-18 must enroll in school, and maintain
            an attendance of at least 85% of class days every month.
          </li>
        </ul>
      </ul>
    </>
  );
}
