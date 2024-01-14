import { useEffect, useRef, useState } from "react";
import { useStyles } from "./index.style";

type OtpInputProps = {
  length: number;
  onOtpSubmit: (data: any) => void;
};
const OtpInput: React.FC<OtpInputProps> = ({ length, onOtpSubmit }) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const inputRefs = useRef([]);
  const classes = useStyles();
  useEffect(() => {
    const firstInput = inputRefs.current[0] as HTMLInputElement;
    if (firstInput) {
      firstInput.focus();
    }
  }, []);

  const handleChange = (index: number, e: any) => {
    const value = e?.target?.value;
    if (isNaN(value)) return;

    const newOpt = [...otp];
    //allow only one input
    newOpt[index] = value.substring(value.length - 1);
    setOtp(newOpt);

    //submit trigger
    const combinedOtp = newOpt.join("");
    if (combinedOtp.length === length) onOtpSubmit(combinedOtp);
  };

  const handleClick = () => {};
  const handleKeyDown = (index: number, e: any) => {};
  console.log("refs", inputRefs);
  return (
    <div>
      {otp?.map((value, index) => {
        return (
          <input
            type="text"
            ref={(input) => (inputRefs.current[index] = input)}
            key={index}
            value={value}
            onChange={(e) => handleChange(index, e)}
            onClick={() => handleClick()}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className={classes.optInput}
          />
        );
      })}
    </div>
  );
};
export { OtpInput };
