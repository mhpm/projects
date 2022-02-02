import { Button } from "components";
import LogoImage from "./vercel.svg";
import styled from "styled-components";

const Container = styled.header`
  border-bottom: 1px solid rgba(255, 255, 255, 0.212);
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: inline-block;
  vertical-align: top;
  font-size: 1rem;
`;

export interface HeaderProps {
  user?: {
    name: string;
  };
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}) => (
  <Container>
    <Logo>
      <img src={LogoImage} alt="logo" width={100} />
    </Logo>
    <div>
      {user?.name !== "" ? (
        <div>
          Welcome: <span style={{ marginRight: 15 }}>{user?.name}</span>
          <Button size="small" onClick={onLogout} label="Log out" />
        </div>
      ) : (
        <>
          <Button size="small" onClick={onLogin} label="Log in" />
          <Button
            primary
            size="small"
            onClick={onCreateAccount}
            label="Sign up"
          />
        </>
      )}
    </div>
  </Container>
);
