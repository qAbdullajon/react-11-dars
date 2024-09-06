import BookIcon from '@mui/icons-material/Book';
import ManIcon from '@mui/icons-material/Man';
import CottageIcon from '@mui/icons-material/Cottage';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PeopleIcon from '@mui/icons-material/People';

const admin = [
  {
    content: "Teacher",
    path: '/admin-layout',
    icon: <BookIcon />
  },
  {
    content: "Student",
    path: '/admin-layout/student',
    icon: <ManIcon />
  },
]
const user = [
  {
    content: "Bosh sahifa",
    path: '/student-layout',
    icon: <CottageIcon />
  },
  {
    content: "To'lovlar",
    path: '/student-layout/tolovlar',
    icon: <CreditCardIcon />
  },
  {
    content: "Gruhim",
    path: '/student-layout/guruhim',
    icon: <PeopleIcon />
  },
]

export { admin, user }