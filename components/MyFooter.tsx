import { Typography } from "antd";

const { Text } = Typography;
function MyFooter() {
  return (
    <footer className="flex flex-col items-center justify-center p-4 bg-slate-50">
      <Text>© Post Black Belt Corp. All rights reserved.</Text>
      <Text>
        Contact me: <Text copyable>skyu.dev@gmail.com</Text>{" "}
      </Text>
    </footer>
  );
}

export default MyFooter;
