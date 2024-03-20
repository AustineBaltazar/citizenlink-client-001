import React from "react";

export default function AboutSystem() {
  return (
    <div className="flex flex-col w-full md:w-3/4 xl:w-1/2 mx-auto justify-center items-center">
      <div className="bg-gray-200 flex w-full md:w-[30rem] py-2 px-4">
        <h1>
          Home / <b className="text-red-500">The System</b>
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="pt-12 text-4xl font-bold">The System</h1>
      </div>
      <div className="w-full w-[200%]  text-lg">
        <p className="pt-12">
          In the Philippines, social welfare programs such as the Pantawid
          Pamilyang Pilipino Program (4Ps) and the provision of benefits and
          services to senior citizens have long been instrumental in poverty
          alleviation and ensuring the welfare of vulnerable populations (DSWD,
          2016) (Republic of the Philippines, 2010). The 4Ps, an initiative by
          the Department of Social Welfare and Development (DSWD), targets
          impoverished families, providing them with conditional cash transfers
          to cover basic needs, health, and education expenses. On the other
          hand, senior citizens in the Philippines have enjoyed privileges and
          benefits under the Expanded Senior Citizens Act of 2010, encompassing
          healthcare, financial assistance, and discounts on various goods and
          services (Republic of the Philippines, 2010).
        </p>
        <div className="pt-8">
          <p>
            The efficient and accurate management of these programs and services
            has long been a challenge. Manual management of beneficiary records
            and benefits distribution processes in many municipalities has led
            to inefficiencies, delays, and potential mismanagement of resources
            (UNDP, 2020). To address these challenges and ensure eligible
            recipients receive their benefits promptly and accurately, the
            municipality of ABCD town recognizes the pressing need for a modern
            and comprehensive web-based management system.
          </p>
        </div>
        <div className="pt-8">
          <p>
            Web-based management systems have increasingly gained prominence in
            recent years due to their ability to streamline administrative
            processes, enhance data accuracy, and facilitate better
            communication and coordination among stakeholders (World Bank,
            2016). Such systems have proven invaluable in managing social
            welfare programs in various countries.
          </p>
        </div>
        <div className="pt-8">
          <p>
            The proposed web-based management system for senior citizens and 4Ps
            beneficiaries in ABCD town aspires to offer a robust solution to
            these long-standing challenges. This system will serve as an
            Information System for seniors and 4Ps members and act as a
            collaborative tool for updates, announcements, application for
            membership, qualifications, approval, and more. Through a secure and
            user-friendly web portal, beneficiaries will have access to their
            membership information and the latest program updates.
          </p>
        </div>
      </div>
    </div>
  );
}
