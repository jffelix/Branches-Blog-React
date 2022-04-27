import React from "react";
import Modal from '@mui/material/Modal';
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const UserLikes = (props) => {

    return (
        <div>
            <Modal
                open={props.displayLikes}
                // close={!props.displayLikes}
            >
                <Box>
                    <Typography>
                        Hello from UserLikes Component!
                    </Typography>
                    <Button onClick={props.hideLikes}>Close</Button>
                </Box>
            </Modal>
        </div>
    )

}

export default UserLikes;