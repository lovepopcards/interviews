export const footer = {
  paddingTop: 32,
  paddingBottom: 24,
  background: '#333333'
};

export const footerContainer = {
  '@media screen and (min-width: 1200px)': {
    maxWidth: "1250px",
    padding: '0',
    margin: "0 auto"
  },
  '@media screen and (min-width: 768px)': {
    padding: '0 30px',
    margin: "0 auto"
  },
  flexGrow: 1,
  margin: '0 auto',
  position: 'relative',
  width: 'auto',
  padding: '0 50px',
};

export const copyright = {
  '&::selection': {
    background: '#ce2333',
    color: '#fff',
  },
  textAlign: 'center',
  fontWeight: 300,
  fontSize: '16px',
  lineHeight: '1.6',
  padding: '0 12px',
  margin: "10px 0 0 0",
  color: '#FFFFFF',
};

export const title = {
  '&::selection': {
    background: '#ce2333',
    color: '#fff',
  },
  fontSize: '1.20em',
  marginBottom: '.5em',
  lineHeight: '1.4',
  color: '#FFFFFF',
}

export const subscribeInput = {
  '@media screen and (min-width: 768px)': {
    width: '100%',
    minWidth: '100%'
  },
  '&::selection': {
    background: '#ce2333',
    color: '#fff',
  },
  padding: '10px 0',
  margin: '0 4% 10px 0',
  fontSize: '15px',
  fontWeight: 200,
  lineHeight: '1.6',
  textIndent: '5px',
  minWidth: '130px',
  border: '1px solid #999',
  borderRadius: "4px",
  width: "100%",
  minWidth: "90%"
}

export const button = {
  background: "#ce2333",
  color: "#FFF",
  padding: "8px 30px",
  border: "none",
  borderRadius: "4px",
  fontSize: "15px",
  fontWeight: "bold"
}

export const emailService = {
  '&::selection': {
    background: '#ce2333',
    color: '#fff',
  },
  clear: 'left',
  font: '14px Helvetica,Arial,sans-serif',
  padding: 0,
  margin: 0
}

export const subscribeLabel = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  border: "0"
}

export const link = {
  '&::selection': {
    background: '#ce2333',
    color: '#fff',
  },
  '& li': {
    '& a::selection': {
      background: '#ce2333',
      color: '#fff',
    },
    '&:hover':{
      cursor: "pointer",
      color: "#8a8a8a"
    },
    margin:'0 0 4px',
    fontWeight: 200,
    fontSize: "16px",
    lineHeight: '1.6',
  },
  listStyle: 'none outside',
  margin: '0 0 7px',
  padding: '0',
  color: '#fff',
  textDecoration: 'none',
  "&:after": {
    textDecoration: 'none',
  }
}

export const inlineList = {
  '&::selection': {
    background: '#ce2333',
    color: '#fff',
  },
  marginTop: '25px',
  marginLeft: 0,
  paddingLeft: 0,
  listStyle: "none",
  "& li": {
    verticalAlign: "middle",
    margin: "0 5px 15px",
    display: "inline-block",
    textAlign: "-webkit-match-parent",
    '& a::selection': {
      background: '#ce2333',
      color: '#fff',
    },
  }
}

export const hidden = {
  display: 'none'
}

export const twitterIcon = {
  padding: "6px 9px",
  color: "#FFF",
  border: "2px solid #e5e5e5",
  borderRadius: "50%",
  width: '33px',
  height: '33px',
  "&:hover": {
    backgroundColor: "#2478ba",
    borderColor: "#2478ba"
  }
}

export const instagramIcon = {
  padding: "6px 9px",
  color: "#FFF",
  border: "2px solid #e5e5e5",
  borderRadius: "50%",
  width: '33px',
  height: '33px',
  "&:hover": {
    backgroundColor: "#833AB4",
    borderColor: "#833AB4"
  }
}

export const facebookIcon = {
  padding: "6px 11px",
  border: "2px solid #e5e5e5",
  borderRadius: "50%",
  width: '33px',
  height: '33px',
  "& span": {
    color: "#FFF",
  },
  "&:hover": {
    backgroundColor: "#3a589d",
    borderColor: "#3a589d"
  }
}

export const pinterestIcon = {
  padding: "6px 10px",
  color: "#FFF",
  border: "2px solid #e5e5e5",
  borderRadius: "50%",
  width: '33px',
  height: '33px',
  "&:hover": {
    backgroundColor: "#cb2320",
    borderColor: "#cb2320"
  }
} 

export const lovePopMomentLink = {
  color: "#fff",
  fontSize: "13px",
  lineHeight: "14px",
  fontWeight: 300,
  '&:hover':{
    cursor: "pointer",
    color: "#8a8a8a"
  },
}

export const footerLinksContainer = {
  paddingLeft: "40px"
}
