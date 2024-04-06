import Link from "next/link";
import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Before inviting the bot",
    uv: 1000,
    pv: 1000,
    amt: 2000,
  },
  {
    name: "Before inviting the bot",
    uv: 1000,
    pv: 1000,
    amt: 2000,
  },
  {
    name: "After inviting the bot",
    uv: 4000,
    pv: 200,
    amt: 2000,
  },
  {
    name: "After removing the bot",
    uv: 500,
    pv: 1500,
    amt: 2000,
  },
  {
    name: "",
    uv: 200,
    pv: 1500,
    amt: 2000,
  },
];

interface CustomTooltipProps {
  active: any;
  payload: any;
  label: any;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-md border border-zinc-800 bg-black">
        <div className="mx-4 my-4">
          <h1 className="text-xl">{label}</h1>
          <p className="text-md">{payload[0].value}/4000 happiness score</p>
        </div>
      </div>
    );
  }

  return null;
};

export default class MemberHappinessGraph extends PureComponent {
  render() {
    return (
      <div className="mx-4 w-full">
        <h1 className="mb-2 text-xl font-semibold sm:text-2xl">
          Member happiness after inviting{" "}
          <span className="text-sky-500">Korii Bot</span> 😎
        </h1>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              content={
                <CustomTooltip
                  active={undefined}
                  payload={undefined}
                  label={undefined}
                />
              }
            />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>

        <h1 className="my-2 text-xl font-semibold sm:text-2xl ">
          Member happiness after inviting{" "}
          <span className="text-orange-800">MEE6</span> 💩
        </h1>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
              content={
                <CustomTooltip
                  active={undefined}
                  payload={undefined}
                  label={undefined}
                />
              }
            />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
          </AreaChart>
        </ResponsiveContainer>
        <p className="text-lg italic">
          statistics based on a survey where our{" "}
          <Link className="text-sky-500 underline" href="/doggo">
            doggo
          </Link>{" "}
          was asked how he felt
        </p>
      </div>
    );
  }
}
