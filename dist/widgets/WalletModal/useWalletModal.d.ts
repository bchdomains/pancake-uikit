import { Login } from "./types";
import { Profile } from "../Menu/types";
interface ReturnType {
    onPresentConnectModal: () => void;
    onPresentAccountModal: () => void;
}
declare const useWalletModal: (login: Login, logout: () => void, account?: string | undefined, profile?: Profile | undefined) => ReturnType;
export default useWalletModal;
