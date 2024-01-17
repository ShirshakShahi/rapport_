import React from "react";
import { Typography, Button } from "antd";
import { Link } from "react-router-dom";

const Homepage: React.FC = () => {
  const { Title, Paragraph } = Typography;
  const textColorStyle = { color: "#E2E8F0" };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <div className="text-center">
        <Title level={2} style={textColorStyle}>
          Welcome to Rapport
        </Title>
        <Paragraph style={textColorStyle}>
          Connect with friends, share moments, and explore the social
          experience.
        </Paragraph>
      </div>

      <div className="mt-8">
        <Link to="/login">
          <Button type="primary" size="large">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
