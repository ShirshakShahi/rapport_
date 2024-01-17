import { GithubOutlined } from "@ant-design/icons";

const AboutPage = () => {
  return (
    <div className="container text-slate-200 mx-auto mt-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-center mb-6 max-w-prose">
        Welcome to our amazing app! We strive to provide an incredible user
        experience and innovative features to make your life easier.
      </p>
      <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
      <p className="text-center text-lg mb-6 max-w-prose">
        Our mission is to create a platform that empowers users, fosters
        community engagement, and delivers value in every interaction.
      </p>
      <div className="text-lg text-center mt-8">
        Made with ❤️ by{" "}
        <span className="font-semibold underline italic ">
          <a href="https://github.com/ShirshakShahi" target="_blank">
            Shirshak Shahi
            <span className="inline-block ml-1">
              <GithubOutlined className="text-3xl mb-3" />
            </span>
          </a>
        </span>
      </div>
    </div>
  );
};

export default AboutPage;
