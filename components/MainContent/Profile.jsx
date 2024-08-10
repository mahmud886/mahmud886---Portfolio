import Image from "next/image";

const Profile = () => {
  return (
    <div className="flex items-center gap-x-3">
      <div className="shrink-0">
        <Image
          className="shrink-0 size-16 rounded-full"
          src="/profile-image.jpeg"
          alt="Avatar"
          width={260}
          height={260}
        />
      </div>
      <div className="grow">
        <h1 className="text-lg font-medium text-gray-800 dark:text-neutral-200">
          Md. Iqbal Mahmud
        </h1>
        <p className="text-sm text-gray-600 dark:text-neutral-400">
          Software Engineer
        </p>
      </div>
    </div>
  );
};

export default Profile;