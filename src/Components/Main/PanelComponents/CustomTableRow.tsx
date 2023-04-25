import {
  Flex,
  Container,
  CustomHeader,
} from "../../Styles/CustomTableRowStyles";
type leaderboardData = {
  number: number;
  text: string;
  voucher?: string;
};

interface data {
  leaderboard: leaderboardData[];
}

const CustomTableRow = ({ leaderboard }: data) => {
  const dataType = "voucher" in leaderboard[0];

  return (
    <Container>
      {dataType && (
        <>
          <CustomHeader>
            <div>ადგილი</div>
            <div className="flex">
              <div>
                <img src="/img/voucher.png" alt="voucher"></img>
              </div>

              <span>ვაუჩერი</span>
            </div>
            <div>პრიზი</div>
          </CustomHeader>
          {leaderboard.map((item) => (
            <Flex key={item.number}>
              <div className="start">
                <span>{item.number}</span>
              </div>
              <div>{item.voucher}</div>
              <div className="end">{item.text}</div>
            </Flex>
          ))}
        </>
      )}
      {!dataType && (
        <>
          {leaderboard.map((item) => (
            <Flex className="second-table" key={item.number}>
              <div>
                <span>{item.number}</span>
              </div>
              <div>{item.text}</div>
            </Flex>
          ))}
        </>
      )}
    </Container>
  );
};
export default CustomTableRow;
