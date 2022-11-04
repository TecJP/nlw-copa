import { Center, Icon, Text } from "native-base";
import { Fontisto } from '@expo/vector-icons';
import Logo from '../assets/logo.svg';
import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";

export function SignIn() {
  const { signIn, isUserLoggingIn } = useAuth();

  return (
    <Center flex={1} bgColor="gray.900" p={7}>
      <Logo width={212} height={40} />
      <Button
        title="ENTRAR COM GOOGLE"
        type="SECONDARY"
        leftIcon={<Icon as={Fontisto} name="google" color="white" size="md" />}
        mt={12}
        onPress={signIn}
        isLoading={isUserLoggingIn}
        _loading={{ _spinner: { color: 'white' } }}
      />
      <Text color="white" textAlign="center" mt={4}>
        Não utilizamos nenhuma informacão além {'\n'}
        do seu e-mail para criacão de sua conta.
      </Text>
    </Center>
  );
}
