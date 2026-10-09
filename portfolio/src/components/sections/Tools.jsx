import { useState } from 'react'
import ScrollReveal from '../ScrollReveal'
import ToolModal from '../ToolModal'
import './Tools.css'

export const tools = [
  {
    name: 'React.js',
    icon: 'R',
    description: 'Component-based JavaScript library for building modern interactive user interfaces.',
    features: ['Components', 'Hooks', 'Props & State'],
    animation: 'slide-left',
  },
  {
    name: 'JavaScript',
    icon: 'JS',
    description: 'Flexible, event-driven programming language for creating rich web experiences.',
    features: ['ES Modules', 'Async APIs', 'DOM & Events'],
    animation: 'zoom-rotate',
  },
  {
    name: 'HTML5',
    icon: '</>',
    description: 'The semantic foundation for accessible, structured and meaningful web pages.',
    features: ['Semantic Elements', 'Forms', 'Media APIs'],
    animation: 'flip',
  },
  {
    name: 'CSS3',
    icon: '#',
    description: 'Modern styling language for responsive layouts, motion and polished interfaces.',
    features: ['Flexbox & Grid', 'Responsive Design', 'Animations'],
    animation: 'flip',
  },
  {
    name: 'Node.js',
    icon: 'N',
    description: 'Scalable runtime for building fast, asynchronous server-side applications.',
    features: ['REST APIs', 'Streams', 'Event Loop'],
    animation: 'spring',
  },
  {
    name: 'Express.js',
    icon: '↗',
    description: 'Minimal web framework for creating flexible, maintainable backend services.',
    features: ['Routing', 'Middleware', 'Error Handling'],
    animation: 'scale-fade',
  },
  {
    name: 'MongoDB',
    icon: '◉',
    description: 'Document-oriented database designed for flexible, scalable application data.',
    features: ['Collections', 'Queries', 'Indexes'],
    animation: 'perspective',
  },
  {
    name: 'SQL',
    icon: '⌘',
    description: 'Structured query language for managing and analyzing relational data.',
    features: ['Joins', 'Aggregations', 'Transactions'],
    animation: 'scale-fade',
  },
  {
    name: 'Git & GitHub',
    icon: '⌁',
    description: 'Essential version control and collaboration tools for modern software teams.',
    features: ['Branches', 'Pull Requests', 'Code Review'],
    animation: 'scale-fade',
  },
  {
    name: 'Figma',
    icon: 'F',
    description: 'Collaborative design platform for prototyping, systems and product interfaces.',
    features: ['Auto Layout', 'Components', 'Prototyping'],
    animation: 'diagonal',
  },
]

function ToolCard({ tool, index, onSelect }) {
  return (
    <ScrollReveal className="tools__item" delay={index * 45}>
      <button
        className={`tool-card tool-card--${tool.animation}`}
        type="button"
        onClick={() => onSelect(tool)}
        aria-label={`Learn more about ${tool.name}`}
      >
        <span className="tool-card__number">0{index + 1}</span>
        <span className="tool-card__icon" aria-hidden="true">{tool.icon}</span>
        <span className="tool-card__name">{tool.name}</span>
        <span className="tool-card__description">{tool.description}</span>
        <span className="tool-card__action">
          Explore tool
          <span aria-hidden="true">↗</span>
        </span>
      </button>
    </ScrollReveal>
  )
}

function Tools() {
  const [selectedTool, setSelectedTool] = useState(null)

  return (
    <section id="tools" className="tools section">
      <div className="container">
        <ScrollReveal className="tools__heading">
          <span className="tools__eyebrow">04 / BUILD TOOLKIT</span>
          <h2>Tools for <em>building.</em></h2>
          <p>A focused collection of technologies used to turn ideas into thoughtful, production-ready products.</p>
        </ScrollReveal>

        <div className="tools__grid">
          {tools.map((tool, index) => (
            <ToolCard key={tool.name} tool={tool} index={index} onSelect={setSelectedTool} />
          ))}
        </div>
      </div>

      {selectedTool && <ToolModal tool={selectedTool} onClose={() => setSelectedTool(null)} />}
    </section>
  )
}

export default Tools
