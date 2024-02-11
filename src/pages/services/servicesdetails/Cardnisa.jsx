

function Cardnisa(props) {
  return (
    <>
      <div className="div">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1b84701987243aa73ebbc51183e65bab20026fbef9cea5df4f44dfeca49107e?apiKey=21d766a1386c46b1b5fa78a0fa2e9250&"
          className="img"
        />
        <div className="div-2">Card Number</div>
        <div className="div-3">012022200222</div>
        <div className="div-4">
          <div className="div-5">
            <div className="div-6">Expire date</div>
            <div className="div-7">00 / 00</div>
          </div>
          <div className="div-8">
            <div className="div-9">CVV</div>
            <div className="div-10">1234</div>
          </div>
        </div>
        <div className="div-11" />
        <div className="div-12">
          <div className="div-13">Total </div>
          <div className="div-14">2000$</div>
        </div>
        <div className="div-15">Confirm</div>
        <div className="div-16">Cancel</div>
      </div>
      <style jsx>{`
        .div {
          border-radius: 16px;
          background-color: #fff;
          display: flex;
          max-width: 502px;
          flex-direction: column;
          font-size: 14px;
          color: var(--Neutral-colors-600, #6d758f);
          line-height: 143%;
          padding: 44px 38px;
        }
        @media (max-width: 991px) {
          .div {
            padding: 0 20px;
          }
        }
        .img {
          aspect-ratio: 1.89;
          object-fit: auto;
          object-position: center;
          width: 100%;
        }
        @media (max-width: 991px) {
          .img {
            max-width: 100%;
          }
        }
        .div-2 {
          leading-trim: both;
          text-edge: cap;
          font-feature-settings: "clig" off, "liga" off;
          font-family: Inter, sans-serif;
          font-weight: 600;
          margin-top: 32px;
        }
        @media (max-width: 991px) {
          .div-2 {
            max-width: 100%;
          }
        }
        .div-3 {
          leading-trim: both;
          text-edge: cap;
          font-feature-settings: "clig" off, "liga" off;
          font-family: Inter, sans-serif;
          align-items: start;
          border-radius: 6px;
          border: 1px solid var(--Neutral-colors-300, #f1f3f7);
          box-shadow: 0px 1px 4px 0px rgba(25, 33, 61, 0.08);
          background-color: var(--Neutral-colors-100, #fff);
          margin-top: 12px;
          justify-content: center;
          font-weight: 400;
          white-space: nowrap;
          padding: 18px 60px 18px 16px;
        }
        @media (max-width: 991px) {
          .div-3 {
            max-width: 100%;
            padding-right: 20px;
            white-space: initial;
          }
        }
        .div-4 {
          display: flex;
          margin-top: 32px;
          justify-content: space-between;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-4 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-5 {
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
        }
        .div-6 {
          leading-trim: both;
          text-edge: cap;
          font-feature-settings: "clig" off, "liga" off;
          font-family: Inter, sans-serif;
          font-weight: 600;
        }
        .div-7 {
          leading-trim: both;
          text-edge: cap;
          font-feature-settings: "clig" off, "liga" off;
          font-family: Inter, sans-serif;
          align-items: start;
          border-radius: 6px;
          border: 1px solid var(--Neutral-colors-300, #f1f3f7);
          box-shadow: 0px 1px 4px 0px rgba(25, 33, 61, 0.08);
          background-color: var(--Neutral-colors-100, #fff);
          margin-top: 12px;
          justify-content: center;
          font-weight: 400;
          white-space: nowrap;
          padding: 18px 60px 18px 16px;
        }
        @media (max-width: 991px) {
          .div-7 {
            white-space: initial;
            padding-right: 20px;
          }
        }
        .div-8 {
          display: flex;
          flex-grow: 1;
          flex-basis: 0%;
          flex-direction: column;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .div-8 {
            white-space: initial;
          }
        }
        .div-9 {
          leading-trim: both;
          text-edge: cap;
          font-feature-settings: "clig" off, "liga" off;
          font-family: Inter, sans-serif;
          font-weight: 600;
        }
        .div-10 {
          leading-trim: both;
          text-edge: cap;
          font-feature-settings: "clig" off, "liga" off;
          font-family: Inter, sans-serif;
          align-items: start;
          border-radius: 6px;
          border: 1px solid var(--Neutral-colors-300, #f1f3f7);
          box-shadow: 0px 1px 4px 0px rgba(25, 33, 61, 0.08);
          background-color: var(--Neutral-colors-100, #fff);
          margin-top: 12px;
          justify-content: center;
          font-weight: 400;
          padding: 18px 60px 18px 16px;
        }
        @media (max-width: 991px) {
          .div-10 {
            padding-right: 20px;
            white-space: initial;
          }
        }
        .div-11 {
          background-color: rgba(0, 125, 252, 0.15);
          margin-top: 39px;
          height: 1px;
        }
        @media (max-width: 991px) {
          .div-11 {
            max-width: 100%;
          }
        }
        .div-12 {
          display: flex;
          margin-top: 23px;
          justify-content: space-between;
          gap: 20px;
          font-size: 18px;
          color: #2c3339;
          font-weight: 600;
          line-height: 111%;
        }
        @media (max-width: 991px) {
          .div-12 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-13 {
          leading-trim: both;
          text-edge: cap;
          font-feature-settings: "clig" off, "liga" off;
          font-family: Open Sans, sans-serif;
        }
        .div-14 {
          leading-trim: both;
          text-edge: cap;
          font-feature-settings: "clig" off, "liga" off;
          font-family: Open Sans, sans-serif;
        }
        .div-15 {
          leading-trim: both;
          text-edge: cap;
          font-feature-settings: "clig" off, "liga" off;
          font-family: Inter, sans-serif;
          justify-content: center;
          align-items: center;
          border-radius: 6px;
          box-shadow: 0px 1px 4px 0px rgba(25, 33, 61, 0.08);
          background-color: #164863;
          margin-top: 47px;
          color: var(--Neutral-colors-100, #fff);
          font-weight: 600;
          white-space: nowrap;
          text-align: center;
          padding: 19px 60px;
        }
        @media (max-width: 991px) {
          .div-15 {
            max-width: 100%;
            margin-top: 40px;
            white-space: initial;
            padding: 0 20px;
          }
        }
        .div-16 {
          leading-trim: both;
          text-edge: cap;
          font-feature-settings: "clig" off, "liga" off;
          font-family: Inter, sans-serif;
          justify-content: center;
          align-items: center;
          border-radius: 6px;
          border: 1px solid rgba(68, 77, 107, 0.3);
          box-shadow: 0px 1px 4px 0px rgba(25, 33, 61, 0.08);
          margin-top: 24px;
          color: rgba(68, 77, 107, 0.46);
          font-weight: 600;
          white-space: nowrap;
          text-align: center;
          padding: 19px 60px;
        }
        @media (max-width: 991px) {
          .div-16 {
            max-width: 100%;
            white-space: initial;
            padding: 0 20px;
          }
        }
      `}</style>
    </>
  );
}


export default Cardnisa;