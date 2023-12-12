import React from "react";
import Empower from "./Empower";
import facebook from "/img/facebook.png";
import Thumb3 from "/img/facebook-thumb.png";
import { Link } from "react-router-dom";

export default function Card() {
  return (
    <div>
      <Empower />
      <div className="flex mt-8">
        <div className="w-[70%]">
          <div className="ml-32 mr-16">
            <div className="border-b-2 ">
              <h1 className="bg-red-800 w-fit text-white px-3 py-1">
                Card Registration
              </h1>
            </div>
            <div className="width-max border-b-2 py-6 px-6">
              <button className=" bg-blue-400 px-4 border rounded-lg text-white py-2 hover:bg-blue-700">
                <Link to="/login">Unclaimed</Link>
              </button>
              <ul className="list-disc mt-4 grid gap-2">
                <li>
                  <b>Awaiting Announcement:</b> Residents are waiting for an
                  official announcement from the barangay administration
                  regarding the availability of their cards.{" "}
                </li>
                <li>
                  <b>Incomplete Documentation:</b> Beneficiaries may not have
                  submitted all the required documents or information for card
                  issuance.
                </li>
                <li>
                  <b>Administrative Delays:</b> Delays in the administrative
                  process can result in unclaimed cards, as it may take time to
                  verify and process applications.
                </li>
                <li>
                  <b>Migration or Relocation:</b> Residents who have moved to a
                  different location may face challenges in claiming benefits
                  from their previous barangay.
                </li>
              </ul>
            </div>
            <div className="width-max border-b-2 py-6 px-6">
              <button className=" bg-red-600 px-4 border rounded-lg text-white py-2 hover:bg-red-800">
                Missing
              </button>
              <ul className="list-disc mt-4 grid gap-2">
                <li>
                  <b>Loss or Theft:</b> Activate your card to access updates
                  about your membership.
                </li>
                <li>
                  <b>Misplaced:</b>Cards can become missing due to simple
                  misplacement or forgetfulness.
                </li>
                <li>
                  <b>Warping:</b> The cards may become warped or distorted due
                  to water absorption, making them less durable and harder to
                  handle.
                </li>
              </ul>
            </div>
            <div className="width-max border-b-2 py-6 px-6">
              <button className=" bg-green-600 px-4 border rounded-lg text-white py-2 hover:bg-green-800">
                Activate card
              </button>
              <ul className="list-disc mt-4 mb-16 grid gap-2">
                <li>
                  <b>Claimed but not yet activated:</b> Activate your card to
                  access updates about your membership.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-[30%] mr-32">
          <div className="bg-white 2 mr-8">
            <div className="text-xl font-bold bg-gray-200 py-2 px-2 flex ">
              <img src={facebook} alt="Logo" className="w-8 mr-2" />
              <h2>FOLLOW US ON FACEBOOK</h2>
            </div>
            <a
              href="https://www.youtube.com/watch?v=1bkSjy2IQ2M"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Thumb3}
                alt="Video 2"
                className="w-full h-auto mb-16 mt-4"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
