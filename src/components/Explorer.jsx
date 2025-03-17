import React, { useState } from "react";

const Explorer = ({ data }) => {
  const [treeData, setTreeData] = useState(data || []);
  const [showChildren, setShowChildren] = useState({});

  const handleAddClick = (e, folder, parentID) => {
    e.stopPropagation();
    let promptText = folder ? "Enter folder name" : "Enter file name";
    const name = prompt(promptText);

    let folderNode = {
      id: Math.random(),
      name: name,
      isFolder: folder,
      children: [],
    };

    let fileNode = {
      id: Math.random(),
      name: name,
      isFolder: folder,
    };

    const newNode = folder ? folderNode : fileNode;
    let newTree = updateTree(treeData, parentID, newNode);
    setTreeData(newTree);
  };

  const handleRemoveClick = (e, nodeID, nodeName) => {
    e.stopPropagation();
    const action = confirm(`Are you sure want to delete ${nodeName}`);
    if (action) {
      let newTree = deleteNode(treeData, nodeID);
      setTreeData(newTree);
      alert("Node deleted successfully");
    }
  };

  const updateTree = (tree, id, newObj) => {
    let updatedTree = tree.map((node) => {
      if (node.id === id) {
        return {
          ...node,
          children: [...node.children, newObj],
        };
      }
      if (node.children) {
        return {
          ...node,
          children: updateTree(node.children, id, newObj),
        };
      }
      return node;
    });
    return updatedTree;
  };

  const deleteNode = (tree, id) => {
    return tree
      .filter((node) => node.id !== id)
      .map((node) => {
        if (node.children) {
          return {
            ...node,
            children: deleteNode(node.children, id),
          };
        }
        return node;
      });
  };

  return (
    <div className="container">
      {treeData.map((t_data) => (
        <div key={t_data.id}>
          <div>
            {t_data.isFolder ? (
              <div
                onClick={() =>
                  setShowChildren((prev) => ({
                    ...prev,
                    [t_data.name]: !prev[t_data.name],
                  }))
                }
                style={{ cursor: "pointer" }}
              >
                <span>{showChildren?.[t_data.name] ? "📂" : "📁"}</span>
                <span style={{ fontWeight: "bold" }}>{t_data.name}</span>
                <span style={{ marginLeft: "100px" }}>
                  <span onClick={(e) => handleAddClick(e, false, t_data.id)}>
                    +📄
                  </span>
                  <span
                    style={{ marginLeft: "10px" }}
                    onClick={(e) => handleAddClick(e, true, t_data.id)}
                  >
                    +📁
                  </span>
                </span>
                <span
                  style={{ marginLeft: "20px" }}
                  onClick={(e) => handleRemoveClick(e, t_data.id, t_data.name)}
                >
                  -🪠
                </span>
              </div>
            ) : (
              <div>
                <span>📄</span>
                <span style={{ cursor: "pointer" }}>{t_data.name}</span>
                <span
                  style={{ marginLeft: "20px" }}
                  onClick={(e) => handleRemoveClick(e, t_data.id, t_data.name)}
                >
                  -🪠
                </span>
              </div>
            )}
          </div>
          {t_data.isFolder && (
            <div>
              {showChildren?.[t_data.name] && (
                <Explorer data={t_data.children} />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Explorer;
