import React from "react";
import barangay from "/img/barangay-logo.png";

export default function AboutTown() {
  return (
    <div className="flex flex-col w-full md:w-3/4 xl:w-1/2 mx-auto justify-center items-center">
      <div className="bg-gray-200 flex w-full md:w-[40rem] py-2 px-4">
        <h1>
          <b className="text-red-500">Home</b> / The System
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="pt-10 text-4xl font-bold">Town of Binmaley</h1>
        <img src={barangay} alt="Logo" className="w-96 h-64" />
      </div>
      <div className="w-full md:w-[150%] text-lg">
        <p>
          The Town of Binmaley stands as a hidden gem, inviting travelers to
          explore its rich culture, historical landmarks, and coastal beauty.
          With a diverse economy centered around agriculture and fishing, this
          town has become a unique destination for those seeking a taste of the
          Philippines' traditional way of life.
        </p>
        <div>
          <h1 className="pt-8 font-bold text-xl pb-2">Geography and Economy</h1>
          <p>
            Binmaley's geography is characterized by flat terrain, making it a
            fertile ground for agriculture. Fields of rice sway with the wind, a
            testament to the town's commitment to its agricultural roots. The
            proximity to the Lingayen Gulf also grants the town access to the
            bounties of the sea, making fishing a vital industry. In recent
            years, the local government has taken steps to diversify the economy
            by encouraging tourism and small-scale industries, creating
            opportunities for both residents and visitors.
          </p>
        </div>
        <div>
          <h1 className="pt-8 font-bold text-xl pb-2">Cultural Heritage</h1>
          <p>
            Binmaley is a town that takes pride in its cultural heritage.
            Throughout the year, the town celebrates various festivals and
            events that showcase its rich traditions. The Town Fiesta, typically
            held in honor of the patron saint, is a vibrant affair filled with
            parades, traditional dances, and religious processions. These
            festivities offer a glimpse into the deep-seated traditions and
            spirituality that have been passed down through generations.
          </p>
        </div>
        <div>
          <h1 className="pt-8 font-bold text-xl pb-2">History and Heritage</h1>
          <p>
            Binmaley's history dates back to the Spanish colonial period when
            the town witnessed various historical events. It played a pivotal
            role in the development of Pangasinan as a province. The St. John
            the Evangelist Parish Church, for instance, has witnessed centuries
            of local history, from Spanish colonization to the present day, and
            stands as a symbol of Binmaley's enduring heritage.
          </p>
        </div>
      </div>
    </div>
  );
}
