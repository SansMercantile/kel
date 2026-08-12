import React, { useState, useEffect } from 'react';
import { INITIAL_AGENTS, ZONE_NAMES, ZONE_ORDER } from '../kelData';

// Ported from renderAgentNetwork/renderAgentNode/updateAgentStatus/showAgentDetails in
// js/kel-agricultural.js — React state + hooks replacing the original's direct DOM
// manipulation, same real agent data and same 5s update cadence.
export function AgentNetwork() {
  const [agents, setAgents] = useState(INITIAL_AGENTS);
  const [selectedAgent, setSelectedAgent] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setAgents((prev) =>
        prev.map((agent) => {
          let status = agent.status;
          if (Math.random() < 0.01) {
            const statuses = ['active', 'idle', 'offline'];
            status = statuses[Math.floor(Math.random() * statuses.length)];
          }
          const performance = Math.max(0, Math.min(100, agent.performance + (Math.random() - 0.5) * 5));
          return { ...agent, status, performance };
        })
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="kel-agent-network">
      {ZONE_ORDER.map((zone) => {
        const zoneAgents = agents.filter((a) => a.zone === zone);
        return (
          <div className="kel-card" key={zone}>
            <div className="kel-card-header">
              <div className={`kel-card-icon kel-zone-${zone}`}>
                <span className="kel-icon">🌱</span>
              </div>
              <div>
                <h3 className="kel-card-title">{ZONE_NAMES[zone]}</h3>
                <p className="kel-card-subtitle">{zoneAgents.length} Active Agents</p>
              </div>
            </div>
            <div className="kel-grid kel-grid-2">
              {zoneAgents.map((agent) => (
                <div
                  className="kel-agent-node"
                  key={agent.id}
                  onClick={() => setSelectedAgent(agent)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className={`kel-agent-status kel-status-${agent.status}`} />
                  <h4>{agent.name}</h4>
                  <p><small>{agent.role}</small></p>
                  <div className="kel-progress">
                    <div className="kel-progress-bar" style={{ width: `${agent.performance}%` }} />
                  </div>
                  <small>Performance: {Math.round(agent.performance)}%</small>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {selectedAgent && (
        <div className="kel-modal" onClick={(e) => { if (e.target === e.currentTarget) setSelectedAgent(null); }}>
          <div className="kel-modal-content">
            <span className="kel-modal-close" onClick={() => setSelectedAgent(null)}>&times;</span>
            <h2>{selectedAgent.name}</h2>
            <p><strong>Role:</strong> {selectedAgent.role}</p>
            <p><strong>Zone:</strong> {selectedAgent.zone}</p>
            <p><strong>Status:</strong> {selectedAgent.status}</p>
            <p><strong>Performance:</strong> {Math.round(selectedAgent.performance)}%</p>
            <p><strong>Tasks Completed:</strong> {selectedAgent.tasksCompleted}</p>
            <p><strong>Efficiency:</strong> {Math.round(selectedAgent.efficiency)}%</p>
          </div>
        </div>
      )}
    </div>
  );
}

