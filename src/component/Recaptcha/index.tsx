import ReCAPTCHA from "react-google-recaptcha";
 

export default function Recaptcha({onChange}:any){
    //chavedesiteRV3: 6LdM_FImAAAAAA9u-YSMOEokja_3puE9S2FDMOv-
    //chavedesiteRV2: 6LdlBFMmAAAAAB0pcG-BeC7Q2Lh5ndZBZl2AonuS

    //chavesecretaRV3: 6LdM_FImAAAAABPdab6cCYZE-kaVcVzp59uGwJYr
    //chavesecretaRV2: 6LdlBFMmAAAAADQw86Aei74Bmivv8KxtIsQOkTpz


    const recaptchaKey = "6LdlBFMmAAAAAB0pcG-BeC7Q2Lh5ndZBZl2AonuS";



    return(
        <ReCAPTCHA sitekey={recaptchaKey} onChange={onChange} />
    )
}