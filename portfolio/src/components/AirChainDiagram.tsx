import type { ReactNode } from "react";

/**
 * AirChain node block diagram, bench build. Data path on top, power path below.
 * Colours come from theme tokens via Tailwind fill-/stroke- classes, so the
 * figure follows the site palette. On narrow screens it keeps a 780px minimum
 * width and scrolls inside its own container instead of shrinking illegibly.
 */

const BOX_W = 180;
const COL = [20, 313, 606, 899];
const DATA_Y = 48;
const DATA_H = 116;
const POWER_Y = 252;
const POWER_H = 80;

const mono = { fontFamily: "var(--font-jetbrains-mono), ui-monospace, monospace" };

function Box({
  x,
  y,
  h,
  eyebrow,
  title,
  lines,
}: {
  x: number;
  y: number;
  h: number;
  eyebrow: string;
  title?: string;
  lines: string[];
}) {
  const start = title ? y + 64 : y + 46;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={BOX_W}
        height={h}
        rx={8}
        className="fill-surface stroke-line-strong"
        strokeWidth={1}
      />
      <text x={x + 14} y={y + 22} className="fill-fg-subtle" fontSize={9.5} letterSpacing="0.16em" style={mono}>
        {eyebrow}
      </text>
      {title && (
        <text x={x + 14} y={y + 43} className="fill-fg-strong" fontSize={13} fontWeight={700} style={mono}>
          {title}
        </text>
      )}
      {lines.map((line, i) => (
        <text key={line} x={x + 14} y={start + i * 19} className="fill-fg-muted" fontSize={11} style={mono}>
          {line}
        </text>
      ))}
    </g>
  );
}

function Label({ x, y, children, anchor = "middle" }: { x: number; y: number; children: ReactNode; anchor?: "middle" | "start" }) {
  return (
    <text x={x} y={y} textAnchor={anchor} className="fill-fg-muted" fontSize={10.5} style={mono}>
      {children}
    </text>
  );
}

export default function AirChainDiagram() {
  const dataMid = DATA_Y + DATA_H / 2;
  const gapMid = (i: number) => COL[i] + BOX_W + (COL[i + 1] - COL[i] - BOX_W) / 2;
  const hArrow = (i: number) => ({ x1: COL[i] + BOX_W + 6, x2: COL[i + 1] - 8 });

  return (
    <figure>
      <div
        className="overflow-x-auto rounded-card border border-line bg-bg/60"
        tabIndex={0}
        role="region"
        aria-label="AirChain node block diagram, scrolls horizontally"
      >
        <svg
          viewBox="0 0 1100 352"
          className="block w-full min-w-[780px]"
          role="img"
          aria-labelledby="airchain-diagram-title airchain-diagram-desc"
        >
          <title id="airchain-diagram-title">AirChain node block diagram</title>
          <desc id="airchain-diagram-desc">
            Data path: a PMS particulate sensor, a DHT22 and a GNSS module connect to an ESP32
            DevKit over UART2 and UART0 at 9600 baud. The ESP32 talks to a Quectel EG800Z LTE
            Cat 1 bis modem over UART1 at 115200 baud, and the modem publishes over MQTT with
            TLS to a Mosquitto broker on Kubernetes, topic air/sensor_id/data. Power path: a
            TP5100 charger and a 1S Li-ion pack feed an MT3608 boost at 5 V, which supplies the
            ESP32 and sensors. A separate 5 V boost supplies the modem only, for its current
            bursts of about 2 A.
          </desc>

          <defs>
            <marker id="ac-arrow-data" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0 0 L10 5 L0 10 z" className="fill-accent" />
            </marker>
            <marker id="ac-arrow-power" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0 0 L10 5 L0 10 z" className="fill-status-building" />
            </marker>
          </defs>

          {/* Row labels */}
          <text x={20} y={30} className="fill-accent" fontSize={10} letterSpacing="0.18em" style={mono}>
            DATA PATH
          </text>
          <text x={20} y={POWER_Y - 14} className="fill-status-building" fontSize={10} letterSpacing="0.18em" style={mono}>
            POWER PATH
          </text>

          {/* Data path */}
          <Box x={COL[0]} y={DATA_Y} h={DATA_H} eyebrow="SENSORS" lines={["PMS particulate sensor", "DHT22", "GNSS module"]} />
          <Box x={COL[1]} y={DATA_Y} h={DATA_H} eyebrow="MCU" title="ESP32 DevKit" lines={["3 hardware UARTs", "C++ · PlatformIO · OTA"]} />
          <Box x={COL[2]} y={DATA_Y} h={DATA_H} eyebrow="CELLULAR" title="Quectel EG800Z" lines={["LTE Cat 1 bis", "3.3 V UART"]} />
          <Box x={COL[3]} y={DATA_Y} h={DATA_H} eyebrow="BACKEND" title="Mosquitto broker" lines={["on Kubernetes", "air/<sensor_id>/data"]} />

          {[0, 1, 2].map((i) => (
            <line
              key={i}
              {...hArrow(i)}
              y1={dataMid}
              y2={dataMid}
              className="stroke-accent"
              strokeWidth={1.5}
              markerEnd="url(#ac-arrow-data)"
            />
          ))}
          <Label x={gapMid(0)} y={dataMid - 10}>UART2 / UART0</Label>
          <Label x={gapMid(0)} y={dataMid + 20}>9600 baud</Label>
          <Label x={gapMid(1)} y={dataMid - 10}>UART1</Label>
          <Label x={gapMid(1)} y={dataMid + 20}>115200</Label>
          <Label x={gapMid(2)} y={dataMid - 10}>MQTT over TLS</Label>

          {/* Power path */}
          <Box x={COL[0]} y={POWER_Y} h={POWER_H} eyebrow="CHARGE" lines={["TP5100 charger", "+ 1S Li-ion pack"]} />
          <Box x={COL[1]} y={POWER_Y} h={POWER_H} eyebrow="RAIL A" lines={["MT3608 boost", "5 V · shared loads"]} />
          <Box x={COL[2]} y={POWER_Y} h={POWER_H} eyebrow="RAIL B" lines={["Separate 5 V boost", "modem bursts about 2 A"]} />

          <line
            x1={COL[0] + BOX_W + 6}
            x2={COL[1] - 8}
            y1={POWER_Y + POWER_H / 2}
            y2={POWER_Y + POWER_H / 2}
            className="stroke-status-building"
            strokeWidth={1.5}
            markerEnd="url(#ac-arrow-power)"
          />

          {[1, 2].map((c) => (
            <line
              key={c}
              x1={COL[c] + BOX_W / 2}
              x2={COL[c] + BOX_W / 2}
              y1={POWER_Y - 6}
              y2={DATA_Y + DATA_H + 8}
              className="stroke-status-building"
              strokeWidth={1.5}
              markerEnd="url(#ac-arrow-power)"
            />
          ))}
          <Label x={COL[1] + BOX_W / 2 + 10} y={(POWER_Y + DATA_Y + DATA_H) / 2 + 4} anchor="start">
            ESP32 + sensors
          </Label>
          <Label x={COL[2] + BOX_W / 2 + 10} y={(POWER_Y + DATA_Y + DATA_H) / 2 + 4} anchor="start">
            modem only
          </Label>
        </svg>
      </div>
      <figcaption className="mt-3 max-w-[72ch] font-jetbrains-mono text-xs leading-relaxed text-fg-subtle">
        AirChain node, bench build. The data path is on top and the power path below. The modem
        has its own supply because an MT3608 cannot deliver its current bursts.
      </figcaption>
    </figure>
  );
}
