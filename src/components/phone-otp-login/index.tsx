import { useState } from "react";
import { useStyles } from "./index.style";
import { OtpInput } from "../otp-input";

const PhoneOtpLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [showOptInput, setShowOtpInput] = useState<boolean>(false);
  const classes = useStyles();

  const handlePhoneChange = (e: any) => {
    setPhoneNumber(e?.target?.value);
  };
  const handleSubmit = (event: any) => {
    event?.preventDefault();
    const nummExpression = /[^0-9]/g;
    if (phoneNumber?.length < 10 || nummExpression.test(phoneNumber)) {
      alert("invalid phone number");
      return;
    }
    setShowOtpInput(true);
  };
  const onOtpSubmit = (data: any) => {
    console.log("login successfull", data);
  };
  return (
    <div className={classes.otpLayout}>
      {!showOptInput ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => {
              handlePhoneChange(e);
            }}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>The given phone number is : {phoneNumber}</p>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
};
export { PhoneOtpLogin };
