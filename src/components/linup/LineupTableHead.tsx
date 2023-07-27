type LineupTableHeadProps = {
  dayHeadTitle: string;
  dateHeadTitle: string;
  artistHeadTitle: string;
}

export default function LineupTableHead({
  dayHeadTitle,
  dateHeadTitle, artistHeadTitle,
}: LineupTableHeadProps) {
  return (
    <thead>
      <tr>
        <th>{dayHeadTitle}</th>
        <th>{dateHeadTitle}</th>
        <th>{artistHeadTitle}</th>
      </tr>
    </thead>
  );
}
