import { ShieldCheckIcon } from "@heroicons/react/solid";
import { LogoutIcon } from "@heroicons/react/outline";
import { ActionIcon, Center, Menu } from "@mantine/core";
import { supabase } from "../utils/supabase";
import { Layout } from "../components/Layout";

export const DashBoard = () => {
  const signOut = () => {
    supabase.auth.signOut();
  };

  return (
    <Layout title="DashBoard">
      <Center>
        <ShieldCheckIcon className="mb-4 h-14 w-14 text-teal-500" />
      </Center>
      <Center>
        <ActionIcon my="md" size="lg" onClick={signOut}>
          <LogoutIcon />
        </ActionIcon>
      </Center>
    </Layout>
  );
};
