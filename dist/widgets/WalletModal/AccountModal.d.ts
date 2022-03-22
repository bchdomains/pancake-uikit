import React from "react";
import { Profile } from "../Menu/types";
interface Props {
    account: string;
    logout: () => void;
    onDismiss?: () => void;
    profile?: Profile;
}
declare const AccountModal: React.FC<Props>;
export default AccountModal;
