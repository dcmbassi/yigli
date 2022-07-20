import TableRow from "@mui/material/TableRow"
import Table from "@mui/material/Table"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableCell from "@mui/material/TableCell"
import { TableBody } from "@mui/material"
import { extractDate } from "../src/utils/helpers"

const MeetingsTable = ({meetings}) => {
  return (
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Lieu</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {meetings.map(meeting => (
                    <TableRow key={meeting._id}>
                        <TableCell>{extractDate(meeting.date)}</TableCell>
                        <TableCell>{meeting.location}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default MeetingsTable