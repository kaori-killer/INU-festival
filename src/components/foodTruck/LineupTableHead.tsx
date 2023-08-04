type LineupTableHeadProps = {
  firstTitle: string;
  secondTitle: string;
  thirdTitle? : string;
}

export default function LineupTableHead({
  firstTitle,
  secondTitle,
  thirdTitle,
}: LineupTableHeadProps) {
  return (
    <thead>
      <tr>
        <th>{firstTitle}</th>
        <th>{secondTitle}</th>
        {thirdTitle ? <th>{thirdTitle}</th> : ''}
      </tr>
    </thead>
  );
}

LineupTableHead.defaultProps = {
  thirdTitle: '',
};
