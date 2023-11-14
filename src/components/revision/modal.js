import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const itemsStyle={
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const iconStyle={
    marginRight: "10px",
    color: "#23469c",
}

const ContactModal = ({open, setOpen}) => {
  const handleClose = () => setOpen(false);

  return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography variant="h6" component="h2">
              <span style={{
                    fontWeight: "600",
                    color: "#467bfc",
              }}>Watech</span> te cuida
            </Typography>
            <hr
          style={{
            height: "1px",
            width: "100%",
            backgroundColor: "#5947a8",
            border: "none",
          }}
        />
            <Typography sx={{ mt: 2 }}>
              ¿Cómo te quieres comunicar con el equipo técnico? 
            </Typography>
            <Box style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
            }}>
            <Box style={itemsStyle}>
                <LocalPhoneIcon style={iconStyle}/> <p>0800 - 12349894</p>
            </Box>
            <hr
          style={{
            height: "1px",
            width: "80%",
            background: "rgb(3,53,98)",
            margin: 0,
background: "linear-gradient(90deg, rgba(3,53,98,0) 0%, rgba(41,25,145,1) 50%, rgba(182,182,182,0) 100%)",
            border: "none",
          }}
        />
            <Box style={itemsStyle}>
                <WhatsAppIcon style={iconStyle}/> <p>WhatsApp</p>
            </Box>
            <hr
          style={{
            height: "1px",
            width: "80%",
            background: "rgb(3,53,98)",
            margin: 0,
background: "linear-gradient(90deg, rgba(3,53,98,0) 0%, rgba(41,25,145,1) 50%, rgba(182,182,182,0) 100%)",
            border: "none",
          }}
        />
            <Box style={itemsStyle}>
                <EmailIcon style={iconStyle}/> <p>Correo electrónico</p>
            </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
  );
};

export default ContactModal;