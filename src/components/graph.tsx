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

const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active: any;
  payload: any;
  label: any;
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black border border-zinc-800 rounded-md">
        <div className="mx-4 my-4">
          <h1 className="text-xl">{label}</h1>
          <p className="text-md">{payload[0].value}/4000 happy members</p>
        </div>
      </div>
    );
  }

  return null;
};

export default class MemberHappinessGraph extends PureComponent {
  render() {
    return (
      <div className="w-full mx-4">
        <h1 className="text-2xl font-semibold mb-2">
          Member happiness after inviting Korii Bot
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

        <h1 className="text-2xl font-semibold my-2">
          Member happiness after inviting MEE6 (stinky)
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
      </div>
    );
  }
}
