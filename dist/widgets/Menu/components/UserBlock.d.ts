import React from "react";
import { Login } from "../../WalletModal/types";
import { Profile } from "../types";
interface Props {
    account?: string;
    login: Login;
    logout: () => void;
    profile?: Profile;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
