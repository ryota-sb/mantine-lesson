import Link from "next/link";
import { ReplyIcon } from "@heroicons/react/solid";
import { Button, Group } from "@mantine/core";
import { Layout } from "../components/Layout";
import { BrandGithub, ThreeDCubeSphere } from "tabler-icons-react";

const ButtonDemo = () => {
  return (
    <Layout title="Button">
      <Group position="center">
        <Button color="green" radius="lg" uppercase leftIcon={<BrandGithub />}>
          Sign up
        </Button>
        <Button mt="md" leftIcon={<ThreeDCubeSphere />}>
          Sign in
        </Button>
        <Link href="/">
          <ReplyIcon className="mt-4 h-6 w-6 cursor-pointer text-gray-300" />
        </Link>
      </Group>
    </Layout>
  );
};

export default ButtonDemo;
