import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

interface IRepositoryMenuProps {
  repositoryNameList: string[];
  currentRepositoryName: string;
  handleCurrentRepository: Function;
}

function RepositoryMenu({ repositoryNameList, currentRepositoryName, handleCurrentRepository }: IRepositoryMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (selectedRepositoryName: string) => {
    setAnchorEl(null);
    handleCurrentRepository(selectedRepositoryName);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        data-testid="gitRepository"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClickListItem}>
        현재 선택된 Repository: {currentRepositoryName}
      </Button>
      <Menu id="lock-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
        {repositoryNameList.map((repositoryName, index) => (
          <MenuItem data-testid="gitRepositoryMenu" key={repositoryName} selected={repositoryName === currentRepositoryName} onClick={() => handleMenuItemClick(repositoryName)}>
            {repositoryName}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default RepositoryMenu;
