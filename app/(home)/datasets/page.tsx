import React from "react";
import Link from "next/link";

type Props = {};

const DataSets = (props: Props) => {
  return (
    <>
      <Link href="/datasets/${} " className="text-white">
        go to dataset
      </Link>
    </>
  );
};

export default DataSets;
