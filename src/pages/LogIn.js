import styles from "./LogIn.module.css";
const LogIn = () => {
  return (
    <div className={styles.logIn}>
      <img
        className={styles.malusiMsomiXpMgsqga8UnsplIcon}
        alt=""
        src="/malusimsomixp--mgsqga8unsplash-2@2x.png"
      />
      <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
      <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
      <div className={styles.imgHere}>
        <div className={styles.imgHereInner}>
          <div className={styles.groupChild} />
        </div>
        <div className={styles.image1Parent}>
          <div className={styles.image1}>
            <img className={styles.image1Icon} alt="" src="/image-12@2x.png" />
          </div>
          <div className={styles.loginParent}>
            <div className={styles.login}>
              <div className={styles.loginChild} />
              <div className={styles.loginToContinue}>Login to Continue</div>
            </div>
            <div className={styles.groupParent}>
              <div className={styles.forgotPasswordParent}>
                <div className={styles.forgotPassword}>Forgot password?</div>
                <div className={styles.rememberMeParent}>
                  <div className={styles.rememberMe}>Remember Me</div>
                  <img
                    className={styles.iconSuggestedSquareEm}
                    alt=""
                    src="/icon--suggested--square--empty.svg"
                  />
                </div>
              </div>
              <div className={styles.emailAddres}>
                <div className={styles.emailId}>Email ID</div>
                <div className={styles.enterYourEmail}>Enter your Email ID</div>
                <img
                  className={styles.emailAddresChild}
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
              <div className={styles.password}>
                <div className={styles.password1}>Password</div>
                <div className={styles.enterYourPassword}>
                  Enter your Password
                </div>
                <img className={styles.eyesIcon} alt="" src="/eyes.svg" />
                <img
                  className={styles.passwordChild}
                  alt=""
                  src="/vector-2.svg"
                />
              </div>
            </div>
            <div className={styles.title}>
              <div className={styles.logInParent}>
                <div className={styles.logIn1}>Log in</div>
                <div className={styles.enterToContinue}>
                  Enter to continue and explore within your grasp.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.logofullBIcon} alt="" src="/logofull-b.svg" />
    </div>
  );
};

export default LogIn;
