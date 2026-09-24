import { useState } from 'react'

export default function ProjectVisual({ image, title, accent, type }) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className={`project-visual visual-${accent}`}>
      {image && !imageError ? (
        <img
          src={image}
          alt={title}
          className="project-image"
          onError={() => setImageError(true)}
        />
      ) : (
        <>
          <div className="visual-grid" />

          <div className="visual-window">
            <div className="window-bar">
              <i />
              <i />
              <i />
            </div>

            <div className="window-body">
              <div className="window-copy">
                <span />
                <span />
                <span />
              </div>

              <div className="window-art">
                <b>{type === '3D' ? '3D' : 'WEB'}</b>
              </div>
            </div>
          </div>
        </>
      )}

      <span className="visual-pill">{type}</span>
    </div>
  )
}