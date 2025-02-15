import { useRef } from "react";
import styles from "./profile__user.module.css";

const ProfileUser = (): React.JSX.Element => {
  const profileImage = useRef<any>();
  const inputFile = useRef<any>();
  return (
    <div className={styles.container__profile__user}>
      <div className={styles.container__image}>
        <img
          ref={profileImage}
          className={styles.image__profile}
          src="/public/img/Profile-IG.jpg"
          alt="profile user"
        />
        <label htmlFor="file">
          <i className="fa-solid fa-pen-fancy"></i>
          <input
            ref={inputFile}
            onChange={() => {
              profileImage.current.src = URL.createObjectURL(
                inputFile.current.files[0]
              );
            }}
            type="file"
            name="file"
            id="file"
            accept="image/png, image/jpg, image/jpeg"
          />
        </label>
      </div>
      <div className={styles.bio__user}>
        <h1 className={styles.name__user}>hello, arjun!</h1>
        <p className={styles.tagline__of__user}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          sequi!
        </p>
      </div>
    </div>
  );
};

export default ProfileUser;
