
import styled from "@emotion/styled";
import { useTheme } from '@mui/material/styles'; // Certifique-se de importar corretamente
import { ReactNode } from "react";

interface StyledButtonProps {
    children: ReactNode;
}
const StyledButton: React.FC<StyledButtonProps> = ({children}) => {
  const theme = useTheme(); // useTheme agora acessa o tema globalmente

  const StyledButton = styled("button")({
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "3px",
    padding: "5px 15px",
    width: "100%",
    color: theme.palette.primary.contrastText,
    display:"inline-flex",
    alignItems:"center",
    justifyContent:"center",
    gap:"10px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  });

  return <StyledButton>
    {children}
  </StyledButton>;
};

export default StyledButton;
