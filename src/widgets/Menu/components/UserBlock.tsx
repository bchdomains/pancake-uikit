import React from "react";
import Button from "../../../components/Button/Button";
import { useWalletModal } from "../../WalletModal";
import { Login } from "../../WalletModal/types";
import { Profile } from "../types";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
  profile?: Profile;
}

const UserBlock: React.FC<Props> = ({ account, profile, login, logout }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account, profile);
  const accountEllipsis = profile?.username ? profile?.username :
     (account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null);
 return (
    <div>
      {account ? (
        <Button
          scale="sm"
          variant="tertiary"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </Button>
      ) : (
        <Button
          scale="sm"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          Connect
        </Button>
      )}
    </div>
  );
};

export default React.memo(UserBlock, (prevProps, nextProps) => prevProps.account === nextProps.account && prevProps.profile === nextProps.profile);
